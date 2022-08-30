import { useId } from 'react';

const Experience = () => {
  const id = useId();
  return (
    <>
      <div className="field">
        <label htmlFor={`${id}-firstname`}>Firstname</label>
        <input type="text" name="firstname" id={`${id}-firstname`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-lastname`}>Lastname</label>
        <input type="text" name="lastname" id={`${id}-lastname`} />
      </div>
    </>
  );
};

export default Experience;
