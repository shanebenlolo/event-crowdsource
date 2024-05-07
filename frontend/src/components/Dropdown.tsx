import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  label,
  options,
  onSelect,
}) => {
  return (
    <div className="relative inline-block text-left w-full">
      <label className="block text-sm font-bold text-gray-700 mb-1">
        {label}
      </label>
      <Menu as="div" className="w-full">
        <div>
          <Menu.Button className="inline-flex justify-between w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
            {value ? value : label}
            <ChevronDownIcon
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-1 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                      onClick={() => onSelect(option)}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
