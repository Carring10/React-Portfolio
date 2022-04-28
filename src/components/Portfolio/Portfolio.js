import React, { useState } from 'react';
import techBlog from '../../images/tech-blog.png';
import dayPlanner from '../../images/Day-Planner.png';
import internationalDishes from '../../images/international-dishes.png'
import passwordGenerator from '../../images/password-generator.png'
import weatherApi from '../../images/Weather-api.png'
import portfolio from '../../images/portfolio.png'
import './Portfolio.css'
import Project from '../Projects/Project';


function Portfolio({ currentView, setCurrentView }) {
  return (
    <>
      <h1>{currentView}</h1>
      <p>Applications</p>
      <div className='project-list'>
        <Project
          name='Tech Blog'
          githubLink='https://github.com/Carring10/Tech-Blog'
          img={techBlog}
          appLink="https://vast-refuge-27012.herokuapp.com/"
        />
        <Project
          name='Day Planner'
          githubLink='https://github.com/Carring10/Day-Planner'
          img={dayPlanner}
          appLink="https://carring10.github.io/Day-Planner/"
        />
        <Project
          name='International Dishes'
          githubLink='https://github.com/Carring10/international-dishes'
          img={internationalDishes}
          appLink="https://carring10.github.io/international-dishes/"
        />
        <Project
          name='Password Generator'
          githubLink='https://github.com/Carring10/Secure-password-gen'
          img={passwordGenerator}
          appLink="https://carring10.github.io/Secure-password-gen/"
        />
        <Project
          name='Weather API'
          githubLink='https://github.com/Carring10/Weather-Forecast'
          img={weatherApi}
          appLink="https://carring10.github.io/Weather-Forecast/"
        />
        <Project
          name='Portfolio'
          githubLink='https://github.com/Carring10/Updated-Portfolio'
          img={portfolio}
          appLink="https://carring10.github.io/Updated-Portfolio/"
        />
      </div>
    </>
  )
}

export default Portfolio;