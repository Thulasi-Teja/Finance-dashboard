export default function RoleSwitcher({ role, setRole }) {
  return (
    <select
      className="p-2 border rounded"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}