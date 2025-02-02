import React from "react";

const FavouritesIcon = ({ width = 18, height = 18, isActive = false }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      className={`dark:fill-customYellow fill-customBlue ${
        isActive ? "dark:!fill-primaryBlack !fill-white" : ""
      }`}
    >
      <path
        d="M18.1171 3.89337C19.3386 4.67886 20.2177 5.91869 20.5079 7.31198C20.7815 8.62854 20.5539 10.0198 19.846 11.1789L19.8147 11.2278C19.2553 12.0696 16.3198 14.9815 11.0082 19.9637L11.0022 19.9682C10.9506 20.0079 10.8755 20.0102 10.8211 19.9763L10.8039 19.9637L9.5506 18.7849C4.92849 14.4251 2.40037 11.8898 1.96622 11.1789C1.25836 10.0198 1.03077 8.62854 1.3043 7.31198C1.59454 5.91869 2.47362 4.67886 3.69514 3.89337C5.02106 3.03922 6.71448 2.78681 8.2492 3.18259C9.0364 3.38451 9.76305 3.75808 10.3895 4.25885C10.5704 4.40425 10.74 4.56243 10.9063 4.72368L11.0109 4.62439C11.1791 4.46617 11.3164 4.34433 11.4228 4.25885C12.0492 3.75808 12.7758 3.38451 13.563 3.18259C15.0978 2.78681 16.7912 3.03922 18.1171 3.89337Z"
        fill={`dark:fill-customYellow fill-customBlue ${
          isActive ? "dark:!fill-primaryBlack !fill-white" : ""
        }`}
      ></path>
    </svg>
  );
};

export default FavouritesIcon;
