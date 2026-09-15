package com.kameko.app;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;
import android.view.Gravity;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        TextView textView = new TextView(this);
        textView.setText("Welcome to Kameko!");
        textView.setTextSize(24f);
        textView.setGravity(Gravity.CENTER);
        
        setContentView(textView);
    }
}
