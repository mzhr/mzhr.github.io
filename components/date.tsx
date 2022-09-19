import { parseISO, format } from 'date-fns';

interface Props extends React.TimeHTMLAttributes<HTMLTimeElement> {
  dateString: string;
}

export default function Date({ dateString, ...props }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} {...props}>{format(date, 'LLLL d, yyyy')}</time>;
}