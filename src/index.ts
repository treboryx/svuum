import { ofetch } from "ofetch";

/**
 * Get the latest status of a Svuum parcel
 * @param {string} code Svuum parcel number
 * @return {string[]} Returns reference number, order number, status, timestamp (unix) and remarks
 * e.g. splitAt('Halloween', 3, 6, 9) => ['Hal', 'low', 'een']
 */
export const parcel = async (code: string) => {
  const data = await ofetch(
    `https://eu.fareye.co/track-referenceNo/get_status_multiple?com_code=svm&onlyLatest=false&processMasterIds=1071&referenceNumber=${code}`
  );
  const payload = {
    reference_number: data[0].referenceNumber,
    order_number: data[0].processDataList.order_number,
    status: data[0].processTimeLineLogsList[0].status,
    timestamp: Math.floor(
      new Date(data[0].processTimeLineLogsList[0].statusTime).getTime() / 1000
    ),
    remarks: data[0].processTimeLineLogsList[0].remarks,
  };
  return payload;
};
