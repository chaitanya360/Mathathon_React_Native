package com.mathathon;


import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.view.View;



public class SplashActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        
        
        finish();
    }
}