export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}

export interface NewTicket {
  title: string;
  text: string;
}
