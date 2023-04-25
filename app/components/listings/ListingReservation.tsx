'use client';
import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';
import Button from '../Button';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = ({
  dateRange,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
  disabled,
  disabledDates,
}: ListingReservationProps) => {
  return (
    <div className="overflow-hidden bg-white border rounded-xl border-neutral-200 ">
      <div className="flex items-center gap-1 p-4">
        <span className="text-2xl font-semibold ">$ {price}</span>
        <span className="text-sm text-neutral-500">per night</span>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        onChange={(value) => onChangeDate(value.selection)}
        disabledDates={disabledDates}
      />
      <hr />
      <div className="p-4">
        <Button onClick={onSubmit} disabled={disabled} label="Reserve" />
      </div>
      <div className="flex items-center justify-between p-4 text-lg font-semibold">
        <div>Total</div>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default ListingReservation;
