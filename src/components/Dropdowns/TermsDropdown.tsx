import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const TermsDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const terms = [
    "FAFA878 VIP program is only provided for registered members of FAFA878.",

    "FAFA878 Management reserves the right to change, amend, add, or invalidate at any time without notice any of these terms and conditions.",

    "VIP members' participation is to follow the terms and conditions stated under the program and website.",

    "VIP, Bronze, Silver, Gold, Platinum, Diamond, Premium, Prestige, President, and Chairman are entitled to an automatic upgrade.",

    "Our VIP offers are intended for recreational players only and we, FAFA878, may in our sole discretion limit the eligibility of customers to participate in any matters.",

    "FAFA878 also reserves the right to check members' transaction records and login status at any time. If we find out and firmly believe any terminal user or personal group misuses the qualification and rights, we reserve the right to cancel the qualification of VIP members without notice.",

    "Upgrade bonus can only be claimed 1 time per VIP Level.",

    "FAFA878 reserves the right to interpret, change, and invalidate the rules of VIP members.",

    "General Promotional Terms & Conditions Apply.",
  ];

  return (
    <div className="bg-secondary w-full rounded-2xl p-4">
      {/* Header */}
      <div
        className="flex items-center justify-between gap-3"
        onClick={() => toggleDropdown()}
      >
        <span className="text-lg font-bold">Terms & Conditions</span>
        {openDropdown ? (
          <FaChevronDown className="size-4 rotate-180 duration-200" />
        ) : (
          <FaChevronDown className="size-4 rotate-0 duration-200" />
        )}
      </div>

      {/* Content */}
      {openDropdown && (
        <div className="border-stroke mt-4 border-t p-4">
          <ol>
            {terms.map((term, index) => (
              <li key={index} className="mb-2 list-decimal pl-5">
                {term}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default TermsDropdown;
