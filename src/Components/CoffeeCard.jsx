/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {_id, coffeeName, quantity, chef, photo } =
    coffee;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
           fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
           })
           .then(res => res.json())
           .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                  });
                  const remaining = coffees.filter(cof => cof._id !==_id)
                  setCoffees(remaining)
            }
           })
            }
          });
    }



  return (
    <div className="card card-side bg-base-100 shadow-xl px-6">
      <figure>
        <img className="rounded-lg" src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-evenly items-center w-full">
        <div className="space-y-6">
        <h2 className="card-title">Name: {coffeeName}</h2>
        <p>{quantity}</p>
        <p>{chef}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
            <button onClick={()=>handleDelete(_id)} className="btn join-item btn-error">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
