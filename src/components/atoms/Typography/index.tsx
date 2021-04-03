import React from 'react';
import styles from './styles.module.scss';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4'
  color?: 'Black' | 'White',
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children, className, variant, color,
}) => {
  const getElementClasses = () => {
    const colorVariant = styles[color];
    const variantClasses = styles[variant];
    return `${className} ${colorVariant} ${variantClasses} ${styles.Typography}`;
  };

  const renderTypographyElement = () => {
    const classes = getElementClasses();
    switch (variant) {
      case 'h1': {
        return (
          <h1 className={classes}>
            {children}
          </h1>
        );
      }
      case 'h2': {
        return (
          <h2 className={classes}>
            {children}
          </h2>
        );
      }
      case 'h3': {
        return (
          <h3 className={classes}>
            {children}
          </h3>
        );
      }
      case 'h4': {
        return (
          <h4 className={classes}>
            {children}
          </h4>
        );
      }
      default: {
        return (
          <p className={classes}>
            {children}
          </p>
        );
      }
    }
  };

  return renderTypographyElement();
};

Typography.defaultProps = {
  variant: 'h1',
  color: 'Black',
  className: '',
};

export default Typography;
