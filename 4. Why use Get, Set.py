class Cal ( object ):
	def __init__ ( self, v1, v2 ):
		if isinstance( v1, int ):				# in python : if isintance(v, int) => v is int ?
			self.v1 = v1 
		if isinstance( v2, int ):				# in ruby : if v.is_a?(Integer) => v is int ?
			self.v2 = v2						# Because ruby instance variable is can't access
	def add ( self ):
		return self.v1 + self.v2
	def subtract ( self ):
		return self.v1 - self.v2
	def setV1 ( self, v ):
		if isinstance( v, int ):
			self.v1 = v
	def getV1 ( self ):
		return self.v1

c1 = Cal( 10,10 )
print( c1.add() )
print( c1.subtract() )
c1.setV1( 'apapapap' )
c1.v2 = 30
print( c1.add() )
print( c1.subtract() )