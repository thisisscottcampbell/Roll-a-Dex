import { useState } from 'react';

const InputHook = (init) => {
  const [input, updateValue] = useState(init);

  const handleChange = e => updateValue(e.target.value);
  const reset = () => updateValue('');

  return [input, handleChange, reset];
}

export default InputHook;