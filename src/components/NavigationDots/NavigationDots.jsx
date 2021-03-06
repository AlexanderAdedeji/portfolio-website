import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, idx) => (
          <a
            href={`#${item}`}
            // onClick={() => setToggle(false)}
            key={item + idx}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        
        )
      )}
    </div>
  );
};

export default NavigationDots;
