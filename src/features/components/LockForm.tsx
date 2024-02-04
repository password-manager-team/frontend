import React, { FormEvent } from 'react';

const LockForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get('password') as string;
    console.log('Password submitted:', password);
  };

  return (
    <div className="bg-black text-white rounded-lg p-5 shadow-lg shadow-white/20 w-72 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="text-center mb-4">Enter your Master Password</h2>
        <label htmlFor="master-password" className="mb-1 block">Master Password</label>
        <input
          name="password" 
          type="password"
          id="master-password"
          className="w-full p-2.5 mb-5 border border-white rounded bg-transparent text-white placeholder-white/70 focus:outline-none"
          placeholder="****************"
        />
        <button type="submit" className="w-full p-2.5 rounded bg-white text-black hover:bg-gray-200 focus:outline-none">
          Unlock
        </button>
      </form>
    </div>
  );
};

export default LockForm;