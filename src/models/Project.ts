export default interface Project {
  id: string;
  name: string;
  stack: string[];
  goals: { goal: string; icon: string; title: string }[];
  images: string[];
  link_repo: string;
  link_app: string;
  type: string;
}
