package com.mathathon;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this
import android.os.Bundle; // import this
import android.view.View;


public class MainActivity extends ReactActivity {

  //custom flash screen

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    hideSystemUI();
    super.onCreate(savedInstanceState);


    SplashScreen.show(this,true);  // here



    



    
  }

  @Override
public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
        hideSystemUI();
    }
}

private void hideSystemUI() {
  // Enables regular immersive mode.
  // For "lean back" mode, remove SYSTEM_UI_FLAG_IMMERSIVE.
  // Or for "sticky immersive," replace it with SYSTEM_UI_FLAG_IMMERSIVE_STICKY
  View decorView = getWindow().getDecorView();
  decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
          // Set the content to appear under the system bars so that the
          // content doesn't resize when the system bars hide and show.
          // | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
          // | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
          // | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
          // Hide the nav bar and status bar
          | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
          | View.SYSTEM_UI_FLAG_FULLSCREEN);
}



  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Mathathon";
  }
}
