import React from 'react';
import PropTypes from 'prop-types';
import BottomSheet from 'reanimated-bottom-sheet';

const AppBottomSheet = ({ sheetRef, header, renderContent }) => {
  return (
    <BottomSheet
      initialSnap={0}
      ref={sheetRef}
      snapPoints={[0, 300, 650]}
      renderHeader={header}
      renderContent={renderContent}
    />
  );
};

export default AppBottomSheet;

AppBottomSheet.defaultProps = {
  header: () => {},
};

AppBottomSheet.propTypes = {
  sheetRef: PropTypes.any.isRequired,
  header: PropTypes.any,
};
