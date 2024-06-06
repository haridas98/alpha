import React, { useEffect, useRef } from "react";

export const Spinner = () => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      if (spinnerRef.current) {
        spinnerRef.current.classList.remove("show");
      }
    }, 1);

    return () => clearTimeout(spinnerTimeout);
  }, []);

  return <div id="spinner" ref={spinnerRef}></div>;
};

export const StickyNavbar = () => {
  const stickyNavbarRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (stickyNavbarRef.current) {
        if (window.scrollY > 300) {
          stickyNavbarRef.current.style.top = "0px";
        } else {
          stickyNavbarRef.current.style.top = "-100px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="sticky-top" ref={stickyNavbarRef}></div>;
};

export const DropdownOnHover = () => {
  useEffect(() => {
    const handleDropdownHover = () => {
      const dropdowns = document.querySelectorAll(".dropdown");
      if (window.matchMedia("(min-width: 992px)").matches) {
        dropdowns.forEach((dropdown) => {
          dropdown.addEventListener("mouseenter", handleMouseEnter);
          dropdown.addEventListener("mouseleave", handleMouseLeave);
        });
      } else {
        dropdowns.forEach((dropdown) => {
          dropdown.removeEventListener("mouseenter", handleMouseEnter);
          dropdown.removeEventListener("mouseleave", handleMouseLeave);
        });
      }
    };

    const handleMouseEnter = (event) => {
      const dropdown = event.currentTarget;
      dropdown.classList.add("show");
      dropdown
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", "true");
      dropdown.querySelector(".dropdown-menu").classList.add("show");
    };

    const handleMouseLeave = (event) => {
      const dropdown = event.currentTarget;
      dropdown.classList.remove("show");
      dropdown
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", "false");
      dropdown.querySelector(".dropdown-menu").classList.remove("show");
    };

    handleDropdownHover();

    window.addEventListener("resize", handleDropdownHover);

    return () => {
      window.removeEventListener("resize", handleDropdownHover);
      const dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", handleMouseEnter);
        dropdown.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return null;
};

export const FactsCounter = () => {
  useEffect(() => {
    const counterUpOptions = {
      delay: 10,
      time: 2000,
    };

    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    counters.forEach((counter) => {
      const startValue = parseInt(counter.innerText);
      const endValue = parseInt(counter.dataset.target);

      const updateCounter = () => {
        const increment = Math.ceil(
          ((endValue - startValue) / counterUpOptions.time) *
            counterUpOptions.delay
        );
        const currentValue = parseInt(counter.innerText);

        if (currentValue < endValue) {
          counter.innerText = currentValue + increment;
          setTimeout(updateCounter, counterUpOptions.delay);
        } else {
          counter.innerText = endValue;
        }
      };

      updateCounter();
    });
  }, []);

  return null;
};
