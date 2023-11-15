import { useForm } from "react-hook-form";
import axios from "axios";

function AddContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/contacts/", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>First Name: </label>
          <input type="text" name="firstName" {...register("firstName")} />
        </div>
        <div className="form-control">
          <label>Last Name: </label>
          <input type="text" name="lastName" {...register("lastName")} />
        </div>
        <div className="form-control">
          <label>Phone Number: </label>
          <input type="text" name="phoneNumber" {...register("phoneNumber")} />
        </div>
        <div className="form-control">
          <label>Email: </label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Address: </label>
          <input type="text" name="address" {...register("address")} />
        </div>
        <div className="form-control">
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddContact;
