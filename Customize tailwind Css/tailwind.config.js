

// Actually this file is already provivded by tailwind while setuping tailwind so no need to create it

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
      // screen size will be declared here
  
      screens:{
        xms:'300px'
        //now this will be my new custom screen size
      },
      extend: {
        // Here I will put my custom css value to use
        // Like I want my custom border width which is not available on tailwind then I will do
          borderWidth:{  //This is already on config file i am creating my own value only not a element
            10:'10px'
            }       //Now I can access this custom css from my tailwind
  
            // Another one like tailwind provides screen size that is sm is till only 640px suppose I want till 300px then I can do that
            // but remember that scrren size should be define above the extend below the theme
  
      },
    },
    plugins: [],
  }
  
  // Like this we can add whatever we want on the tailwind css.

  