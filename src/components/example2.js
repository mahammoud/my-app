
  
export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div onClick={()=> alert("You clicked me")} style={{width:1000, backgroundColor: 'blue' }}>
      <Button onPress={onPlayMovie}>
        Play Movie
      </Button>
      <Button onPress={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onPress, children }) {
  return (
    <button onClick={onPress}>
      {children}
    </button>
  );
}
  