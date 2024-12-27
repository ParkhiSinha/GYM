import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Elevate your life!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Ignite your inner spirit!
        </p>
        <div className="bootcamps">
          <div>
            <h4>INFERNO FITNESS</h4>
            <p>
              Transform your body with our high intensity interval training bootcamp that offers cardio,strength training and agility exercises for burning calories,building muscles and boosting endurance.
            </p>
          </div>
          <div>
            <h4>WARRIOR'S DEN</h4>
            <p>
              Get ready for a challenging and rewarding bootcamp that will push you towards your limit and unleash your warrior spirit.
            </p>
          </div>
          <div>
            <h4>CARDIO BLAST</h4>
            <p>
              Ignite cardiovascular fitness and high energy workouts to level up your fitness goals.
            </p>
          </div>
          <div>
            <h4>STRENGTH FORGE</h4>
            <p>
              Build strength and boost your metabolism with techniques of weightlifting.
            </p>
          </div>
          <div>
            <h4>FIT FUSION</h4>
            <p>
                Experience an exciting workout that combines zumba and yoga for improving flexibility, balanced diet and overall fitness.
            </p>
          </div>
          <div>
            <h4>BATTLE READY</h4>
            <p>
              Prepare for a battle and get ready for a challenging bootcamp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;