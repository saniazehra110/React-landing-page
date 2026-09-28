import { useState } from "react";

const AnnouncementBar = () => {
    
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible) return null;

  return (
    <div className="announcement-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 15px', backgroundColor: '#F5AF19', color: '#2B2D42', fontWeight: 'bold' }}>
      <p style={{ margin: 0, width: '100%', textAlign: 'center' }}>✨ Unique Pre-loved Collection | Only 1 Piece Available Per Design! ✨</p>

      <button onClick={() => setIsVisible(false)}
      style={{ background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold', color: '#2B2D42' }}
        >
✕
      </button>
    </div>

  );
};

export default AnnouncementBar;