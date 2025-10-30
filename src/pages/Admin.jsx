import { useState, useEffect } from "react";

function downloadCSV(rows) {
  const header = Object.keys(rows[0] || {}).join(",");
  const csv = [header].concat(rows.map(r => Object.values(r).map(v => `"${String(v).replace(/"/g,'""')}"`).join(","))).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `inquiries_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("inquiries") || "[]");
    setInquiries(store);
  }, []);

  const clearAll = () => {
    localStorage.removeItem("inquiries");
    setInquiries([]);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#0E7490] mb-6">Admin - Inquiries</h2>
      <div className="mb-4 flex gap-3">
        <button className="bg-[#0E7490] text-white px-4 py-2 rounded" onClick={() => downloadCSV(inquiries)}>Export CSV</button>
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={clearAll}>Clear All</button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        {inquiries.length === 0 ? (
          <div className="text-gray-600">No inquiries saved yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr><th className="pb-2">Name</th><th>Phone</th><th>Email</th><th>Message</th><th>Date</th></tr>
            </thead>
            <tbody>
              {inquiries.map((q, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{q.name}</td>
                  <td>{q.phone}</td>
                  <td>{q.email}</td>
                  <td>{q.message}</td>
                  <td>{new Date(q.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
