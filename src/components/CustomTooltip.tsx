import React, { memo } from "react";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        {payload.map((exercise: any, idx: number) => (
          <p key={idx}>
            <span
              className="indicator"
              style={{ backgroundColor: exercise.color }}
            />{" "}
            <span className="exercise-name">{exercise.name}</span>{" "}
            {exercise.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default memo(CustomTooltip);