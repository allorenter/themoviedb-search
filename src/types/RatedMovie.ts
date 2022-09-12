export default interface RatedMovie {
  id: number;
  title?: string;
  posterPath?: string;
  rate?: number;
  comments?: string;
  timestamp: number;
}
