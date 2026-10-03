import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProfileCard
        name="Bəyaz Ömərova"
        profession="Frontend Developer"
        bio="HTML, CSS və JavaScript ilə veb interfeyslər hazırlayıram və frontend bacarıqlarımı inkişaf etdirirəm."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHoeCIkGOLAep4IvOG1RDLgnMzjM6VK9NkqAZn89-ZQ&s=10"
      />
    </div>
  );
}

export default App;