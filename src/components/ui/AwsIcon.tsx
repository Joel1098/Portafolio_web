
interface AwsIconProps {
  service: string;
  className?: string;
}

export function AwsIcon({ service, className = "w-4 h-4" }: AwsIconProps) {
  const name = service.toLowerCase();

  if (name.includes("lambda")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 3H15.2L11 11.2L7.8 5H3.5L8.7 15L5.2 21H8.8L13 12.8L16.2 19H20.5L15.3 9L18.8 3Z" fill="#FF9900"/>
      </svg>
    );
  }

  if (name.includes("s3")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6V18L12 22L20 18V6L12 2ZM18 16.5L12 19.5L6 16.5V7.5L12 4.5L18 7.5V16.5Z" fill="#E05243"/>
        <path d="M12 7L8 9V15L12 17L16 15V9L12 7Z" fill="#569A31"/>
      </svg>
    );
  }
  if (name.includes("sqs") || name.includes("sns")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#FF4F8B" fillOpacity="0.2" stroke="#FF4F8B" strokeWidth="2"/>
        <path d="M7 9H17M7 12H17M7 15H13" stroke="#FF4F8B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  

}