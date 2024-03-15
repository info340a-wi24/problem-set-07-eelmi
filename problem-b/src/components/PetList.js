import React from 'react';
function PetCard(props) {
  const pet = props.petData;
  return (
    <div className="card" onClick={() => props.adoptCallback(pet.name)}>
      <img className="card-img-top" src={pet.img} alt={pet.name} />
      <div className="card-body">
        <h3 className="card-title">{pet.name}{pet.adopted ? ' (Adopted)' : ''}</h3>
        <p className="card-text">{pet.sex} {pet.breed}</p>
      </div>
    </div>
  );
}
function PetList(props) {
  return (
    <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {props.pets.map(pet => (
          <PetCard key={pet.name} petData={pet} adoptCallback={props.adoptCallback} />
        ))}
      </div>
    </div>
  );
}
export default PetList;
