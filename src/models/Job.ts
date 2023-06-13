export default interface Job {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  description: string;
  stack: string[];
  goals: string[];
  image: string;
}
