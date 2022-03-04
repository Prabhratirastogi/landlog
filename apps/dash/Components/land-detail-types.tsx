export type land_status = "pending" | "problematic" | "ok";

export interface LandDetailItemProps {
  id: number;
  name: string;
  area: number;
  status: land_status;
  count: {
    done: number;
    total: number;
  }
};