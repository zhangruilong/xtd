package com.github.cuter44.wxmp.util;

import java.util.Map;
import java.util.HashMap;
import java.io.IOException;

import com.github.cuter44.wxmp.reqs.*;
import com.github.cuter44.wxmp.resps.*;
import com.alibaba.fastjson.*;

/** Token keeper
 * Keep minding the access token and JSSDK Ticket and their expiration, and automatically refresh if expired.
 */
public class TokenKeeper
{
  // CONFIG
    /** Switch to enable TokenKeeper to remember and recall instance with same appid. Enabled by default.
     * <br />
     * If enabled, TokenKeeper keeps instances generated by <code>TokenKeeper.getInstance()</code>.
     * <code>getInstance()</code> returns same singleton for same appid respectively.
     * If disabled, <code>TokenKeeper.getInstance()</code> create new instance every time it is called,
     * without detecting if there is an existing one.
     * In such case, external restraint is expected (which means you are responsible for the implement).
     */
    public static boolean ENABLE_SINGLETON_MANAGEMENT = true;
    protected static HashMap<String, TokenKeeper> instances = new HashMap<String, TokenKeeper>();

  // CONSTRUCT
    protected String appid;
    protected String secret;

    protected String accessToken;
    protected long atExpiration;

    protected String jssdkTicket;
    protected long jtExpiration;

    protected TokenKeeper(String appid, String secret)
    {
        this.appid = appid;
        this.secret = secret;
        this.atExpiration = 0L;
        this.jtExpiration = 0L;

        return;
    }

    /** Construct an instance of TokenKeeper.
     * If <code>ENABLE_SINGLETON_MANAGEMENT</code> enabled, return singleton,
     * <code>secret</code> is taken account only once for respective <code>appid</code>.
     */
    public static TokenKeeper getInstance(String appid, String secret)
    {
        if (!ENABLE_SINGLETON_MANAGEMENT)
            return(new TokenKeeper(appid, secret));

        TokenKeeper tk = TokenKeeper.instances.get(appid);

        if (tk != null)
            return(tk);

        // else
        synchronized(TokenKeeper.instances)
        {
            tk = TokenKeeper.instances.get(appid);

            if (tk != null)
                return(tk);

            // else
            tk = new TokenKeeper(appid, secret);
            TokenKeeper.instances.put(appid, tk);
            return(tk);
        }
    }

  // ACCESS_TOKEN
    protected void retrieveAccessToken()
    {
        try
        {
            TokenClientCredentialResponse resp = new TokenClientCredential(this.appid, this.secret)
                .execute();

            this.accessToken = resp.getAccessToken();
            this.atExpiration = resp.getTmCreate() + (resp.getExpiresIn()*1000L);

            return;
        }
        catch (IOException ex)
        {
            throw(new RuntimeException(ex));
        }
    }

    /** @return this
     */
    public TokenKeeper forceRetrieveAccessToken()
    {
        this.retrieveAccessToken();

        return(this);
    }

    public String getAccessToken()
    {
        if (this.atExpiration > System.currentTimeMillis())
            return(this.accessToken);

        // else
        synchronized(this)
        {
            if (this.atExpiration > System.currentTimeMillis())
                return(this.accessToken);

            this.retrieveAccessToken();

            return(this.accessToken);
        }
    }

  // JSSDK_TICKET
    protected void retrieveJSSDKTicket()
    {
        try
        {
            JSSDKGetticketResponse resp = new JSSDKGetticket(this.getAccessToken())
                .execute();

            this.jssdkTicket = resp.getTicket();
            this.jtExpiration = resp.getTmCreate() + (resp.getExpiresIn()*1000L);

            return;
        }
        catch (IOException ex)
        {
            throw(new RuntimeException(ex));
        }
    }

    /** @return this
     */
    public TokenKeeper forceRetrieveJSSDKTicket()
    {
        this.retrieveJSSDKTicket();

        return(this);
    }

    public String getJSSDKTicket()
    {
        if (this.jtExpiration > System.currentTimeMillis())
            return(this.jssdkTicket);

        // else
        synchronized(this)
        {
            if (this.jtExpiration > System.currentTimeMillis())
                return(this.jssdkTicket);

            this.retrieveJSSDKTicket();

            return(this.jssdkTicket);
        }
    }
}
