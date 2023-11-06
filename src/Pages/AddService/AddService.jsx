import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const AddService = () => {
    const {user} = useContext(AuthContext)

    const handleAddService = (e) => {
    
        e.preventDefault();
        const form = e.target;
        const name = form.yourName.value;
        const serviceName = form.serviceName.value;
        const email = user?.email;
        const price = form.price.value;
        const description = form.description.value;
        const serviceArea = form.serviceArea.value;
        const photo = form.photo.value;

        const newCoffee = {name,serviceName,email,price,description,serviceArea, photo}
        console.log(newCoffee);
    }

    return (
        <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-center mb-5 text-3xl  font-bold font-serif">Add A Service</h2>
      <form onSubmit={handleAddService}>
        {/* Your  name */}
        <div className="md:flex justify-center gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="yourName"
                    defaultValue={user?.displayName}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* service Name */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="serviceName"
                    placeholder="Service Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
        </div>
      
        {/* email*/}
        <div className="md:flex justify-center gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* Price*/}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
        </div>
       
        {/* description */}
        <div className="md:flex justify-center gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* Service Area*/}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text"> Service Area</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="serviceArea"
                    placeholder="Service Area"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
        </div>
        {/* form photo Url*/}
        <div className=" justify-center gap-5">
              <div className="form-control  w-1/2">
                <label className="label">
                  <span className="label-text">Photo URL of the service</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              
             <input type="submit" value="Add A Service" className="btn btn-block border-2 bg-black text-white mt-5"/>
        </div>
      </form>
    </div>
    );
};

export default AddService;