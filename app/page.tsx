import TaskList from "@/app/components/Task/TaskList";

export default function Home() {
  return (
    <div className="xl:tw-mx-[250px] lg:tw-mx-[200px] md:tw-mx-[100px] sm:tw-mx-[60px] tw-mx-5">
      <TaskList />
    </div>
  );
}
