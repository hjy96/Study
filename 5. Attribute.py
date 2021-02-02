class Cal ( object ):
	def __init__ ( self, v ):
		self.__value = v			# in python, If two underbars ( __ ) are attached in 
	def show ( self ):			# front of the intance variable, cannot be accessed from the outside.
		print( self.__value )

c1 = Cal( 10 )
#print( c1.__value )
#c1.value = 20
#print( c1.__value )
c1.show()
								# In ruby, Functions that allow access to intance values from outside
								# attr_reader :value		: Read
								# attr_writer :value		: Write
								# attr_accessor :value	: All