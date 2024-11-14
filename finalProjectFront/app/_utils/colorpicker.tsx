export const getStatusColor = (status: any) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "text-yellow-500";
    case "rejected":
      return "text-red-500";
    case "accepted":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};
