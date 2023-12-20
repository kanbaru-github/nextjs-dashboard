import SideNav from "../ui/dashboard/sidenav";

/**
 * 複数のページで共有されるレイアウト
 * @param {React.ReactNode} - children 子要素(別のページまたはレイアウト)
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
