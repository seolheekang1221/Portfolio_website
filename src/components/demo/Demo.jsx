import React from 'react'
import './demo.css'

const Demo = () => {
    document.querySelector(".container").addEventListener("click", () => {
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
        document.querySelector("body").classList.toggle("dark");
    })
    return (
        <div class="container">
            <div class="sun sun-logo">
                <i class="fas fa-sun"></i>
            </div>      
            <div class="moon moon-logo">
                <i class="fas fa-moon"></i>
            </div>
        </div>
  )
}

export default Demo