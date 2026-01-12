export const segmentAnalytics = {
  track: (event: string, properties: Record<string, any>) => {
    console.log(event, properties);
  },
};
