import React, { useState } from 'react';

export default function BasketballTeam() {
  const students = [
    {
      name: 'John',
      id: 1,
    },
    {
      name: 'Bob',
      id: 2,
    },
    {
      name: 'Cat',
      id: 3,
    },
    {
      name: 'Tom',
      id: 4,
    },
    {
      name: 'Wendy',
      id: 5,
    },
  ];

  const [basketballTeam, setTeam] = useState([]);
  const handleRemoveMember = (id) => {
    setTeam((pre) => {
      const result = [...pre].filter((student) => student.id !== id);
      return result;
    });
  };
  return (
    <>
      <div className="d-flex">
        <div>
          <p>Class</p>
          {students.map((student) =>
            basketballTeam.some(
              (teammate) => teammate.id === student.id
            ) ? null : (
              <div key={student.id}>
                {student.name}
                <button onClick={() => setTeam((pre) => [...pre, student])}>
                  add to Team
                </button>
              </div>
            )
          )}
        </div>
        <div>
          <p>Basketball Team</p>
          {basketballTeam.map((student) => (
            <div key={student.id}>
              {student.name}
              <button onClick={() => handleRemoveMember(student.id)}>
                remove from Team
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
