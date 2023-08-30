import { useMemo } from "react";
import ServicesMoneyBack from "./ServicesMoneyBack";
import "./ServicesCustomerService1.css";
const ServicesCustomerService = ({
  services,
  cUSTOMERSERVICE,
  friendly247CustomerSuppor,
  servicesCustomerServicePosition,
  servicesCustomerServiceTop,
  servicesCustomerServiceLeft,
  frameDivGap,
  cUSTOMERSERVICEFontSize,
  cUSTOMERSERVICEFontWeight,
  cUSTOMERSERVICEFontFamily,
  cUSTOMERSERVICELetterSpacing,
}) => {
  const servicesCustomerServiceStyle = useMemo(() => {
    return {
      position: servicesCustomerServicePosition,
      top: servicesCustomerServiceTop,
      left: servicesCustomerServiceLeft,
    };
  }, [
    servicesCustomerServicePosition,
    servicesCustomerServiceTop,
    servicesCustomerServiceLeft,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const cUSTOMERSERVICEStyle = useMemo(() => {
    return {
      fontSize: cUSTOMERSERVICEFontSize,
      fontWeight: cUSTOMERSERVICEFontWeight,
      fontFamily: cUSTOMERSERVICEFontFamily,
      letterSpacing: cUSTOMERSERVICELetterSpacing,
    };
  }, [
    cUSTOMERSERVICEFontSize,
    cUSTOMERSERVICEFontWeight,
    cUSTOMERSERVICEFontFamily,
    cUSTOMERSERVICELetterSpacing,
  ]);

  return (
    <div
      className="services-customer-service"
      style={servicesCustomerServiceStyle}
    >
      <ServicesMoneyBack servicesMoneyBackServices="/servicescustomer-service.svg" />
      <div className="customer-service-parent" style={frameDiv3Style}>
        <div className="customer-service" style={cUSTOMERSERVICEStyle}>
          {cUSTOMERSERVICE}
        </div>
        <div className="friendly-247-customer">{friendly247CustomerSuppor}</div>
      </div>
    </div>
  );
};

export default ServicesCustomerService;
