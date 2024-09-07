export default function EditProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
}
