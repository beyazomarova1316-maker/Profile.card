function ProfileCard(props) {
  return (
    <div className="w-80 bg-white p-6 rounded-2xl shadow-lg text-center">
      <img
        src={props.image}
        alt={props.name}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />

      <h2 className="text-2xl font-bold mt-4">
        {props.name}
      </h2>

      <p className="text-blue-600 font-medium mt-2">
        {props.profession}
      </p>

      <p className="text-gray-600 mt-3">
        {props.bio}
      </p>
    </div>
  );
}

export default ProfileCard;