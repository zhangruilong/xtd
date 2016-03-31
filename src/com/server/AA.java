package com.server;

import org.xvolks.jnative.JNative; 
import org.xvolks.jnative.Type;
import org.xvolks.jnative.exceptions.NativeException; 

public class AA { 

    public static void main(String[] args) throws NativeException, IllegalAccessException { 
    	JNative jnative = new JNative("mwrf32.dll", "rf_init"); 
    	jnative.setRetVal(Type.INT); 
    	 int i=0; 
    	 jnative.setParameter(i++,0); 
    	 jnative.setParameter(i++,9600); 
    	jnative.invoke();  
    	String result = jnative.getRetVal();
    	System.out.println("结果："+result); 
    	JNative jnative2 = new JNative("mwrf32.dll", "rf_getport"); 
    	jnative.setRetVal(Type.INT); 
    	 int i2=0; 
    	 jnative2.setParameter(i2++,result); 
    	jnative2.invoke();  
    	String result2 = jnative2.getRetVal();
    	System.out.println("结果2："+result2); 
    } 
}
