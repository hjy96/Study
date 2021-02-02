class Cal ( object ):
	def __init__ ( self, v ):
		self.__value = v			# intance변수에 앞에 언더바 2개 ( __ )를 붙이면 외부에서 접근 불가능
	def show ( self ):
		print( self.__value )

c1 = Cal( 10 )
#print( c1.__value )
#c1.value = 20
#print( c1.__value )
c1.show()
								# ruby instance 값 외부에서 접근 가능케 해주는 명령어
								# attr_reader :value		: 읽기 가능
								# attr_writer :value		: 쓰기 가능
								# attr_accessor :value	: 둘 다 가능 ( 이 문장 사용 시 위 두 문장 생략 가능 )