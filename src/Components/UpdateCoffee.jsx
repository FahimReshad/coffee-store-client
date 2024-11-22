import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, coffeeName, quantity, details, category, chef, supplier, photo} = coffee;


    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const photo = form.photo.value;
        const updatedCoffee = {
          coffeeName,
          quantity,
          details,
          category,
          chef,
          supplier,
          photo,
        };
        console.log(updatedCoffee);
    
        // send data to the server
        fetch(`https://coffee-store-server-8lb1zl3x9-fahim-reshads-projects.vercel.app/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
          });
      };
    

  return (
    <section className="p-6 ">
    <form
      onSubmit={handleUpdateCoffee}
      noValidate=""
      action=""
      className="container flex flex-col mx-auto space-y-12"
    >
      <fieldset className="p-6 rounded-md shadow-sm dark:bg-[#F4F3F0] mx-auto">
        <div className="text-center w-1/2 mx-auto mb-6">
          <h2 className="text-2xl font-bold">Update Coffee: {coffeeName}</h2>
          <p className="font-semibold">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">
              Coffee Name
            </label>
            <input
              id="coffeeName"
              name="coffeeName"
              type="text"
              defaultValue={coffeeName}
              placeholder="Coffee Name"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label htmlFor="details" className="text-sm">
              Details
            </label>
            <input
              id="details"
              name="details"
              type="text"
              defaultValue={details}
              placeholder="Details"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="address" className="text-sm">
              Available Quantity
            </label>
            <input
              id="availableQuantity"
              name="quantity"
              type="text"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="city" className="text-sm">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              defaultValue={category}
              placeholder="Category"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="state" className="text-sm">
              Chef
            </label>
            <input
              id="chef"
              name="chef"
              type="text"
              defaultValue={chef}
              placeholder="Enter Coffee Chef"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="zip" className="text-sm">
              Supplier
            </label>
            <input
              id="supplier"
              name="supplier"
              type="text"
              defaultValue={supplier}
              placeholder="Supplier Name"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Photo
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              defaultValue={photo}
              placeholder="Enter Photo URL"
              className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6 bg-[#D2B48C] font-bold rounded-lg py-2">
          <input type="submit" value="Update Coffee" />
        </div>
      </fieldset>
    </form>
  </section>
  );
};

export default UpdateCoffee;
