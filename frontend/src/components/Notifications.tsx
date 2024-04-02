// components/Notifications.tsx

const notifications = [
  {
    id: 1,
    message: "Invoice or refund 🙁",
    user: "Elias X.",
    time: "yesterday",
  },
  {
    id: 2,
    message: "Add my VAT to invoice please",
    user: "Pierre Quiroule",
    time: "1m",
  },
  // More notifications...
];

const Notifications = () => {
  return (
    <div className="fixed top-20 right-10">
      {notifications.map((note) => (
        <div key={note.id} className="bg-white p-4 rounded-lg shadow-md mb-2">
          <p className="text-sm">{note.message}</p>
          <p className="text-xs text-gray-500">
            {note.user} - {note.time}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
