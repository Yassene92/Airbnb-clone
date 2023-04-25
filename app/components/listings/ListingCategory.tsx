import { IconType } from 'react-icons/lib';

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

const ListingCategory = ({
  description,
  icon: Icon,
  label,
}: ListingCategoryProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <span className="text-lg font-semibold">{label}</span>
        <span className="text-neutral-500 font-light">{description}</span>
      </div>
    </div>
  );
};

export default ListingCategory;
