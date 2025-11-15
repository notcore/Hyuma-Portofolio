// src/components/PhoneInput.tsx
import React, { useState } from 'react';

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

interface PhoneInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  countries: Country[];
  defaultCountry?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  label,
  value,
  onChange,
  countries,
  defaultCountry = 'ID',
  placeholder = 'XXXXXXXXXX',
  required = false,
  className = '',
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find(c => c.code === defaultCountry) || countries[0]
  );

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const country = countries.find(c => c.code === code);
    if (country) {
      setSelectedCountry(country);
      // Jika ingin mengganti nilai input saat ganti negara, bisa uncomment:
      // onChange(`${country.dialCode}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`phone-input-container ${className}`}>
      <label htmlFor={id} className="text-xl text-slate-600 text-start">
        {label}
      </label>
      <div className="flex items-center mt-2 mb-3 border border-slate-300 rounded-xl bg-slate-50 h-12 focus-within:border-slate-400">
        <select
          id={`${id}-country`}
          className="bg-slate-50 text-slate-500 px-2 py-1 border-r border-slate-300 rounded-l-xl focus:outline-none"
          value={selectedCountry.code}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.dialCode}
            </option>
          ))}
        </select>
        <input
          type="tel"
          id={id}
          value={value}
          onChange={handleInputChange}
          required={required}
          placeholder={placeholder}
          className="flex-1 bg-slate-50 text-slate-500 p-2 pl-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PhoneInput;