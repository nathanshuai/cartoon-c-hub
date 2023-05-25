import { useForm } from 'react-hook-form';


function New() {
    const { register, handleSubmit, formState: { errors } } 
        = useForm({
          defaultValues: {
          }
    });

  console.log(errors);
  return (
    <div className='container'> 
    <div className="new">
      
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <h2> New Creature </h2>
        <input 
          {...register('name', { required: 'This is required.', parttern: /^[A-Za-z]+$/i,minLength: { value: 1, message: 'Min length is 1'}})}
           placeholder='Name'
           />
        <p>{errors.name?.message}</p>
        <input  
          {...register('status', { required: 'This is required.', pattern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1'}})} 
          placeholder='Status'
           />
        <p>{errors.status?.message}</p>
        <input 
          {...register('species', { required: 'This is required.', pattern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1'}})} 
          placeholder='Species' 
          />
        <p>{errors.species?.message}</p>
        <input 
          {...register('gender', { required: 'This is required.', pattern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1'}})} 
          placeholder='Gender' 
          />
        <p>{errors.gender?.message}</p>
        <input 
          {...register('origin', { required: 'This is required.', pattern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1'}})} 
          placeholder='Origin' 
          />
        <p>{errors.origin?.message}</p>
        <input type='submit' />
      </form>
    </div>
    </div>
    
  );
}

export default New;